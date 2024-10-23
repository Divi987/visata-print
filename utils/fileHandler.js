import { v2 as cloudinary } from 'cloudinary'

function uploadFile(file) {
    cloudinary.uploader
        .upload("dog.mp4", {
            resource_type: "video",
            public_id: "my_dog",
            overwrite: true,
            notification_url: "https://mysite.example.com/notify_endpoint"})
        .then(result=>console.log(result));
}
