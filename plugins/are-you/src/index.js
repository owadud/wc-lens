wp.blocks.registerBlockType("ourplugin/are-you",{
    title: "Are you paying attention?",
    icon:"smiley",
    category:"common",
    edit: function (){
        return (
            <div>
                <p>This is paragraph</p>
                <h3>This is From JS</h3>
            </div>
        )
    },
    save: function (){
        return (
            <>
            <h3>Front End</h3>
            <h1>This is H1</h1>
            </>
        )
    }
})