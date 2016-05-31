import React from 'react'
import {Link} from 'react-router'
import ArticleCard from './ArticleCard.jsx'

const ArticleList = React.createClass({
    componentDidMount:function () {
        var page = this.props.page || 1;
        var category = this.props.category || '';
        this.props.getArticles(page,category);
    },
    componentWillReceiveProps:function (nextProps) {
        if(this.props.page && (this.props.page !== nextProps.page || this.props.category !== nextProps.category)){
            var page = nextProps.page || 1;
            var category = nextProps.category || '';
            this.props.getArticles(page,category);
        }
    },
    render:function () {
        var articles = this.props.articles;
        return (
            <div>
            {
                articles.map(function (item) {
                    return (
                        <ArticleCard 
                            article={item}
                        />
                    );
                })
            }
            </div>
        );
    }
});
export default ArticleList;