import React from 'react'

function Themetoggle() {
    return (
        <div>
            <ul className="theme-toggle" >
                <li className="themes"><a id="primary" href="#">1</a></li>
                <li className="themes"><a id="secondary" href="#">2</a></li>
                <li className="themes"><a id="tertiary" href="#">3</a></li>
          </ul>
        </div>
    )
}

export default Themetoggle

    //   <InputContainer>
    //   <InputLabelContainer value={"darkBlue"}>
    //     <InputNumber>1</InputNumber>
    //     <Input value="darkBlue" onClick={props.click}/>
    //   </InputLabelContainer>
    //   <InputLabelContainer value={"lightGray"}>
    //     <InputNumber>2</InputNumber>
    //     <Input value="lightGray" onClick={props.click}/>
    //   </InputLabelContainer>
    //   <InputLabelContainer value={"violet"}>
    //   <InputNumber>3</InputNumber>
    //     <Input value="violet" onClick={props.click}/>
    //   </InputLabelContainer>
    // </InputContainer>  