import React, {Component} from "react";
import PubSub from 'pubsub-js'
import TagShow from "../tag-show/tag-show";
import {tagList,addTag,updateTag,deleteTag} from '../../api/index'


export default class App extends Component{

    //给组件对象指定state属性
    state={
        tags : [
        ]
    }
    reqServer= (fun,data) =>{
        (async function (){
            const response = await fun(data)
            const tagL =response.data.tags
            this.setState({tags:tagL})

        }).bind(this)()
    }

    constructor(props) {
        super(props);
        this.reqServer(tagList)
    }


    componentDidMount () {
        PubSub.subscribe('addTag', (msg,tag) =>{
            const newTag = {tagColor: tag.tagColor, tagContent: tag.tagContent,tagIndex:tag.tagIndex}
            if(tag.tagIndex===-1){
                this.reqServer(addTag,newTag)
            }else{
                this.reqServer(updateTag,newTag)
            }
        })

        PubSub.subscribe('deleteTag',(msg,index) =>{
            this.reqServer(deleteTag,index)
        })

    }

    render(){
        return(
            <div className="Container">
                <TagShow tags={this.state.tags}  deleteTag={this.deleteTag}/>
            </div>
        )
    }
}