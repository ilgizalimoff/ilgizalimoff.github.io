import React from 'react'
import { Link } from 'react-router-dom'
import classes from './PostItem.module.css'

export default function PostItem({ post }) {
    return (
        <div className={classes.post_item}>
            <div className={classes.post_img}>
                <img src="https://sun9-east.userapi.com/sun9-30/s/v1/ig2/CoBG6xRhr95NrpSpCztUy26dk0cO7GqCfdyjHvxIdHmq82SHbiZ07ZXnvsorif4QD5kWB7m1qv7TLO2_T-yk26pD.jpg?size=200x180&quality=95&type=album" alt="" />
            </div>
            <div className={classes.post_title}>{post.title}</div>
            <Link to={'/posts/' + post.id} className={classes.read_more}>Read More</Link>
        </div>
    )
}
