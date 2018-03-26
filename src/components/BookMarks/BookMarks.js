import React from 'react';
import './BookMarks.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BookMarks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userID: 0,
      bookmarks: []
    }
  }

  componentDidMount() {
    axios.all([
      axios.get('/api/getBookmarks/' + this.state.userID), // userID does not exist yet (look on next line).
      axios.get('/auth/me')
    ])
    .then(axios.spread((bookmarkRes, authRes) => {
      console.log(bookmarkRes);
      this.setState({
        bookmarks: [...bookmarkRes.data],
        userID: authRes.data.user_id
      });
    }));
  }

  render() {

    // let userPosts = this.state.bookmarks.map((e, i, arr) => {
    //   return (<div key={arr[i].id} id={arr[i].id} className="Post">
    //             <div className="Post-header">
    //               <h2 className="Post-heading">{arr[i].post_title}</h2>
    //             </div>
    //             <div className="Post-content">
    //               <ul className="Post-items">
    //                 <li className="Post-item Post-intro">{arr[i].post_intro}</li>
    //                 <li className="Post-item">Author: <span className="author">{arr[i].post_author}</span></li>
    //                 <div className="Post-buttons">
    //                   <Link to="/postView" onClick={this.handleClickView.bind(this, arr[i].id)} className="Post-item view-button"><li>View</li></Link>
    //                   <li onClick={this.handleClickSave.bind(this, arr[i].id)} className="Post-item save-button">Save</li>
    //                 </div>
    //               </ul>
    //             </div>
    //           </div>
    //   );
    // });

    return (
      <div>
        <h1>Bookmarks</h1>
      </div>
    );
  }
}

export default BookMarks;