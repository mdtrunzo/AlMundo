import React from 'react';

class Pin extends React.Component {
  render() {




    return (
      <div className="col s6 m4 xl3">
        <div className="card">
          <div className="card-image">
            <img
              src={
                this.props.card.imageUrl ? (
                  this.props.card.imageUrl
                ) : (
                    'https://cadencestorage.blob.core.windows.net/mondial/PartImages/SmallImages/No_Image.jpg'
                  )
              }
              alt=""
            />
            <a
              href={'#' + this.props.id}
              className="btn-floating halfway-fab waves-effect waves-light amber accent-2 modal-trigger"
            >
              <i class="material-icons">add</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Pin;