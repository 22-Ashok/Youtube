import {AccountCircle} from '@mui/icons-material'
import {userComment} from '../logo/constant'


const AllComment = ({comment}) => {
     
    return (
        <div className='flex'>
      <AccountCircle />
      <div>
        <p className='font-semibold'>{comment.user}</p>
        <p>{comment.comment}</p>
        {/* Render replies if they exist */}
        {comment.reply && Array.isArray(comment.reply) && comment.reply.length > 0 && (
          <div className='border-l border-black ml-4'>
            {comment.reply.map((replyComment, index) => (
              <AllComment key={index} comment={replyComment} />
            ))}
          </div>
        )}
      </div>
    </div>
    )
}

const CommentContainer = () => {

    if(!userComment) return null;
 
    return (
        <div className='px-2 py-3'>
            <h1 className='text-lg font-bold'> comments: </h1>
             { userComment.map((comment) => <AllComment comment={comment} />)}
           
        </div>
    )
}

export default CommentContainer;