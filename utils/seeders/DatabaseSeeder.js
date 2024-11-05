const mongoose = require('mongoose');
const { faker } = require('@faker-js/faker');
// const slugify = require('slugify');
const path = require('path');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../../.env') });

// Import models
const Category = require('../../models/Category');
const Product = require('../../models/Product');
const ProductCategory = require('../../models/ProductCategory');

// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log('📦 Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

// Configuration
const CATEGORIES_COUNT = 5;
const SUB_CATEGORIES_PER_CATEGORY = 3;
const SUB_SUB_CATEGORIES_PER_SUB = 2;
const PRODUCTS_PER_CATEGORY = 4;

/**
 * Generate a random boolean with weighted probability
 */
const randomBoolean = (probability = 0.3) => Math.random() < probability;

/**
 * Generate category path based on parent path
 */
const generatePath = (parentPath, slug) => {
    return parentPath ? `${parentPath}/${slug}` : slug;
};

/**
 * Generate a category with given parameters
 */
async function createCategory(name, level, parentId = null, parentPath = '') {
    const slug = faker.internet.url(); //slugify(name, { lower: true });
    const path = generatePath(parentPath, slug);

    return await Category.create({
        name,
        description: faker.commerce.productDescription(),
        image: faker.image.url(),
        video: randomBoolean(0.2) ? faker.image.url() : undefined,
        parentId,
        level,
        slug,
        path,
        isFeatured: randomBoolean(),
        isTopPick: randomBoolean(),
    });
}

/**
 * Generate a product
 */
async function createProduct() {
    const price = parseFloat(faker.commerce.price({ min: 10, max: 1000 }));
    const discount = randomBoolean(0.4) ? Math.floor(Math.random() * 50) : 0;
    const discountedPrice = discount ? price - (price * (discount / 100)) : price;

    return await Product.create({
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        price,
        discount,
        discountedPrice,
        colors: Array.from({ length: Math.floor(Math.random() * 4) + 1 }, () =>
            faker.color.human()),
        features: faker.commerce.productMaterial(),
        numberOfRaters: Math.floor(Math.random() * 100),
        image: faker.image.url(),
        video: randomBoolean(0.2) ? faker.image.url() : undefined,
        isBestSeller: randomBoolean(),
        isNewArrival: randomBoolean(),
        isCompanyMade: randomBoolean(),
        averageRating: (Math.random() * 4 + 1).toFixed(1),
    });
}

/**
 * Create product category association
 */
async function createProductCategory(productId, categoryId) {
    return await ProductCategory.create({
        productId,
        categoryId,
    });
}

/**
 * Main seeding function
 */
async function seedDatabase() {
    try {
        // Clear existing data
        await Promise.all([
            Category.deleteMany({}),
            Product.deleteMany({}),
            ProductCategory.deleteMany({}),
        ]);
        console.log('🧹 Cleared existing data');

        // Generate main categories
        const categories = await Promise.all(
            Array.from({ length: CATEGORIES_COUNT }, async () => {
                return await createCategory(
                    faker.commerce.department(),
                    0,
                    null
                );
            })
        );
        console.log(`✅ Created ${categories.length} main categories`);

        // Generate sub-categories
        const subCategories = [];
        for (const category of categories) {
            const subs = await Promise.all(
                Array.from({ length: SUB_CATEGORIES_PER_CATEGORY }, async () => {
                    return await createCategory(
                        faker.commerce.productAdjective() + ' ' + category.name,
                        1,
                        category._id,
                        category.path
                    );
                })
            );
            subCategories.push(...subs);
        }
        console.log(`✅ Created ${subCategories.length} sub-categories`);

        // Generate sub-sub-categories
        const subSubCategories = [];
        for (const subCategory of subCategories) {
            const subSubs = await Promise.all(
                Array.from({ length: SUB_SUB_CATEGORIES_PER_SUB }, async () => {
                    return await createCategory(
                        faker.commerce.productAdjective() + ' ' + subCategory.name,
                        2,
                        subCategory._id,
                        subCategory.path
                    );
                })
            );
            subSubCategories.push(...subSubs);
        }
        console.log(`✅ Created ${subSubCategories.length} sub-sub-categories`);

        // Generate products and associate with categories
        const allCategories = [...categories, ...subCategories, ...subSubCategories];

        for (const category of allCategories) {
            const products = await Promise.all(
                Array.from({ length: PRODUCTS_PER_CATEGORY }, async () => {
                    const product = await createProduct();
                    await createProductCategory(product._id, category._id);
                    return product;
                })
            );
            console.log(`✅ Created ${products.length} products for category ${category.name}`);
        }

        console.log('🌱 Seeding completed successfully!');
        process.exit(0);
    } catch (error) {
        console.error('❌ Error seeding database:', error);
        process.exit(1);
    }
}

// Run the seeder
seedDatabase();
