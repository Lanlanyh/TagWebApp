import React,{Component} from "react";
import PropTypes from 'prop-types'
import TagAdd from "../tag-add/tag-add";
import TagItem from "../tag-item/tag-item";
import "./tag-show.css"


export default class TagShow extends Component{
    static propTypes ={
        tags : PropTypes.array.isRequired,
    }

    render(){
        const {tags} = this.props
        return(

            <div className="container">
                <div className="containerHead">
                    <button data-toggle="modal" data-target="#addModal">
                        <svg width="1em" height="0.8em" viewBox="0 0 16 16" className="bi bi-plus-circle"
                             fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path fillRule="evenodd"
                                  d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                        </svg>
                        新标签</button>
                </div>

                <TagAdd/>

                <ul>
                    {
                        tags.map((tag,index) => <TagItem tag={tag} key={index} index={index}/>
                        )
                    }
                </ul>
            </div>
        )
    }
}