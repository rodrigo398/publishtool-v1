import React from 'react';
import moment from 'moment';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts
    };
  }

  static getDerivedStateFromProps(props, state) {
    return {
      posts: props.posts
    };
  }

  render() {
    return (
      <div className="scheduled-posts">
        <h2 className="text-center">Publicaciones</h2>

        <hr className="my-4" />

        {this.state.posts.map(post => {
          return (
            <div
              className="post mr-auto ml-auto col-xs-12 col-sm-12 col-md-8 col-lg-6"
              key={post._id}
            >
              <div className="card">
                {post.type_of === 'photo' && (
                  <img className="card-img-top" src={post.media} />
                )}

                <div className="card-body">
                  <h5 className="card-title">{post.message}</h5>

                  <h6 className="card-subtitle mb-2 text-muted">
                    Pagina : {post.page_name}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted">
                    Hora de publicacion :{' '}
                    {moment
                      .unix(post.schedule_time)
                      .format('MMMM Do YYYY, h:mm:ss a')}
                  </h6>

                  <h6 className="card-subtitle mb-2 text-muted">
                    Tipo de Publicacion :{' '}
                    {post.type_of === 'text' ? 'Text' : 'Media'}
                  </h6>
                  <div className="actions">
                    <a
                      href="#"
                      className="card-link"
                      onClick={this.props.deletePost.bind(this, post._id)}
                    >
                      Eliminar
                    </a>
                    <a
                      href="#"
                      className="card-link"
                      onClick={this.props.publish.bind(this, post._id)}
                    >
                      Publicar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Posts;
