import React from "react";
import { DeleteButton,EditButton,Wrapper } from './ListStyle.js'

export default function List({data,handletEdit,handleDelate}) {
    return (
        <div className="list-group">
           {
            data.map((contact)=> {
               return (
                    <div className="contact-card">
                        <h5 className="contactName">{contact.name}</h5>
                        <p className="phoneNo">{contact.telp}</p>
                        <div>
                            <Wrapper>
                            <DeleteButton onClick={DeleteButton}>Delete</DeleteButton>
                                
                            <EditButton onClick={EditButton}>Edit</EditButton>
                            </Wrapper>
                        </div>
                    </div>

               ) 
            })
           }
        </div>
    );

}