import React, { Component } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: [
        {
          title: "long life food",
          imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTv-rx1ONMsvctgspwHyo9wveF0IGA5JMM14uP0_rkNqd9rHSpY&usqp=CAU",
          id: 1,
          linkUrl: "shop/food"
        },
        {
          title: "masks",
          imageUrl:
            "https://m.media-amazon.com/images/I/6155zk6PRiL._SR500,500_.jpg",
          id: 2,
          linkUrl: "shop/masks"
        },
        {
          title: "survival tools",
          imageUrl:
            "https://i1.wp.com/travelvagrants.com/wp-content/uploads/2019/11/8fc109bf-3d83-45eb-803e-a699eafe1a02.png?fit=810%2C405&ssl=1",
          id: 3,
          linkUrl: "shop/survival-tools"
        },
        {
          title: "home gardening",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/square-foot-gardening-by-planting-flowers-herbs-and-news-photo-584618354-1532960706.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/gardening",
          size: "large"
        },
        {
          title: "guns",
          imageUrl:
            "https://d2eehagpk5cl65.cloudfront.net/img/c800x450-w800-q80/uploads/2020/04/zumaamericastwentyseven140828-800x450.jpg",
          size: "large",
          id: 5,
          linkUrl: "shop/guns",
          size: "large"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...sectionProps }) => (
          <MenuItem id={id} {...sectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
