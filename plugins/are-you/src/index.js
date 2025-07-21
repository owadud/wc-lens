wp.blocks.registerBlockType("ourplugin/are-you",{
    title: "Are you paying attention?",
    icon:"smiley",
    category:"common",
    attributes:{
    skyColor: {type: "string"},
    grassColor: {type: "string"}

    },
    edit: function (props){
        function updateColor(event){
            props.setAttributes({skyColor: event.target.value})
        }
        function updateGrass(event){
            props.setAttributes({grassColor: event.target.value})
        }

        return (
            <div>
                <input type="text" placeholder="skyColor" value={props.attributes.skyColor} onChange={updateColor} />
                <input type="text" placeholder="grassColor" value={props.attributes.grassColor} onChange={updateGrass}/>
            </div>
        )
    },
    save: function (props){
        return (
           <p>The sky color is {props.attributes.skyColor} and Grass color is {props.attributes.grassColor}.</p>
        )
    }
})