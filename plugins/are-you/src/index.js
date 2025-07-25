import {TextControl} from "@wordpress/components"

wp.blocks.registerBlockType("ourplugin/are-you",{
    title: "Are you paying attention?",
    icon:"smiley",
    category:"common",
    attributes:{
    skyColor: {type: "string"},
    grassColor: {type: "string"}

    },
    edit: EditComponent,

   
    save: function (props){
        return null;
    }
})

 function EditComponent (props){
        function updateColor(event){
            props.setAttributes({skyColor: event.target.value})
        }
        function updateGrass(event){
            props.setAttributes({grassColor: event.target.value})
        }

        return (
            <div>
                <TextControl />
            </div>
        )
}