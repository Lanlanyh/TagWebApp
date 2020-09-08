import React, {Component} from "react";
import PubSub from 'pubsub-js'
import TagShow from "../tag-show/tag-show";


export default class App extends Component{

    //给组件对象指定state属性
    state={
        tags:[
            {tagColor:'#007bff',tagContent:'紧急'},
            {tagColor:'#e4606d',tagContent:'测试'},
            {tagColor:'#20c997',tagContent:'开会'},
            {tagColor:'#ffdf7e',tagContent:'写报告'}
        ]
    }
    componentDidMount () {
        PubSub.subscribe('addTag', (msg,tag) =>{
            const {tags} =this.state
            if(tag.tagIndex===-1){
                tags.push({tagColor: tag.tagColor, tagContent: tag.tagContent})
            }else{
                tags.splice(tag.tagIndex,1,{tagColor: tag.tagColor, tagContent: tag.tagContent})
            }
            this.setState(tags)
        })

        PubSub.subscribe('deleteTag',(msg,index) =>{
            const {tags} =this.state
            tags.splice(index,1)
            this.setState(tags)
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