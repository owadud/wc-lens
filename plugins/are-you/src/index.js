import "./index.scss"
import {TextControl, Flex, FlexBlock, FlexItem, Button,Icon} from "@wordpress/components"


wp.blocks.registerBlockType("ourplugin/are-you",{
    title: "Are you paying attention?",
    icon:"smiley",
    category:"common",
    attributes:{
    question:{type: "string"},
    answers:{type: "array", default: ["red", "blue"]},

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

 function deleteAnswer(indexToDelete){  
    const newAnswers = props.attributes.answers.filter(function (answer,index){
        return index !== indexToDelete;
   })  
   props.setAttributes({answers: newAnswers})   
 }
        return (
            <div className="paying-attention-edit-block">
                <TextControl label="Question:" value={props.attributes.question} onChange={updateQuestion} style={{fontSize: "20px"}}/>
                <p style={{fontSize:"13px", margin:"20px 0 8px 0"}}>Answer:</p>
                {props.attributes.answers.map(function (answer,index) {
                    return (
                        <Flex>
                    <FlexBlock> 
                        <TextControl value={answer} onChange={ newValue=>{ 

                            const newAnswers = props.attributes.answers.concat([]);
                            newAnswers [index] = newValue;

                            props.setAttributes({answers: newAnswers})
                        }}></TextControl>
                    </FlexBlock>
                    <FlexItem>
                        <Button>
                            <Icon className="Mark-as-correct" icon="star-empty"></Icon>
                        </Button>
                    </FlexItem>
                    <FlexItem><Button isLink className="attention-delete" onClick={()=> deleteAnswer(index)}>

                        Delete
                        </Button></FlexItem>
                    
                    </Flex>
                    ) 
            
                })}
                    
            
                    <Button isPrimary onClick= {()=> {
                        props.setAttributes({answers: props.attributes.answers.concat([""])})
                    }}>Add another Answer</Button>
                
            </div>
        )
    }