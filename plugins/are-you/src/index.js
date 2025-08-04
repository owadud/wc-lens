import "./index.scss"
import {TextControl, Flex, FlexBlock, FlexItem, Button,Icon} from "@wordpress/components"


wp.blocks.registerBlockType("ourplugin/are-you",{
    title: "Are you paying attention?",
    icon:"smiley",
    category:"common",
    attributes:{
    question:{type: "string"}

    },
    edit: EditComponent,

   
    save: function (props){
        return null;
    }
})

 function EditComponent (props){
       
        function updateQuestion(value){
            props.setAttributes({question:value})

        }

        return (
            <div className="paying-attention-edit-block">
                <TextControl label="Question:" value={props.attributes.question} onChange={updateQuestion} style={{fontSize: "20px"}}/>
                <p style={{fontSize:"13px", margin:"20px 0 8px 0"}}>Answer:</p>
                <Flex>
                    <FlexBlock>
                        <TextControl></TextControl>
                    </FlexBlock>
                    <FlexItem>
                        <Button>
                            <Icon className="Mark-as-correct" icon="star-empty"></Icon>
                        </Button>
                    </FlexItem>
                    <FlexItem><Button isLink className="attention-delete">
                        Delete
                        </Button></FlexItem>
                    
                    </Flex>
                    <Button isPrimary>Add another Answer</Button>
                
            </div>
        )
}