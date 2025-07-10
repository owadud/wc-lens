wp.blocks.registerBlockType("ourplugin/are-you",{
    title: "Are you paying attention?",
    icon:"smiley",
    category:"common",
    edit: function (){
        return wp.element.createElement("h3",null,"Hello, this is from admin editor screens")
    },
    save: function (){
        return wp.element.createElement("h1",null,"Hello, this is from front-end screens")
    }
})