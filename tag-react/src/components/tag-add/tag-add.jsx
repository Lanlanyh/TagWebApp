import React,{Component} from "react";
import PubSub from 'pubsub-js'
import './tag-add.css'

export default class TagAdd extends Component{

    state = {
        tagColor:'',
        tagContent: '',
        tagIndex:-1
    }

    componentDidMount () {
        PubSub.subscribe('updateTag', (msg, tag) => {
            this.setState({tagColor: tag.tagColor,tagContent: tag.tagContent, tagIndex:tag.tagIndex})
        })
    }

    handleChange = (event) => {
        if(event.target.name==="tagContent"){
            const tagContent =event.target.value
            this.setState({tagContent})
        }else if(event.target.name==="tagColor"){
            const tagColor =event.target.value
            this.setState({tagColor})
        }

    }
    handleSubmit = () =>{
        //收集新tag数据
        const tag = this.state
        //更新
        if(tag.tagColor!=='' && tag.tagContent!==''){
            PubSub.publish('addTag',tag)
        }
        else{
            alert("请填写标签！")
        }
        //清除数据
        this.setState({
            tagColor:'',
            tagContent: '',
            tagIndex:-1
        })
    }
    render(){
        return(
            <div className="modal fade" id="addModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                 aria-hidden="true">
                <div className="modal-dialog modal-sm">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">新标签</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control" maxLength={10} value={this.state.tagContent} name="tagContent" onChange={this.handleChange}/>
                                </div>
                                <div className="form-group">
                                    <div className="btn-group btn-add">

                                        <button type="button" className="btn btn-color col-2" style={{background: "#007bff"}} value={"#007bff"} name="tagColor" onClick={this.handleChange}></button>
                                        <button type="button" className="btn btn-color col-2" style={{background: "#c6c8ca"}} value={"#c6c8ca"} name="tagColor" onClick={this.handleChange}></button>
                                        <button type="button" className="btn btn-color col-2" style={{background: "#ffdf7e"}} value={"#ffdf7e"} name="tagColor" onClick={this.handleChange}></button>
                                        <button type="button" className="btn btn-color col-2" style={{background: "#20c997"}} value={"#20c997"} name="tagColor" onClick={this.handleChange}></button>
                                        <button type="button" className="btn btn-color col-2" style={{background: "#e4606d"}} value={"#e4606d"} name="tagColor" onClick={this.handleChange}></button>
                                        <button type="button" className="btn btn-color col-2" style={{background: "#fd7e14"}} value={"#fd7e14"} name="tagColor" onClick={this.handleChange}></button>
                                     </div>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">取消</button>
                            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handleSubmit}>创建</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}