export const Editor = ( { initialData }) => {
    return (
        <div className="h-full flex flex-col">
            <Navbar
        id={initialData.id}
        editor={editor}
        activeTool={activeTool}
        onChangeActiveTool={onChangeActiveTool}
      />
        </div>
    )
}