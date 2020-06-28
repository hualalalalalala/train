import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";
import Footer from "@/components/Footer";
import Card from "@/components/Card";
import Header from "@/components/Header";

class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nowApi: "",
      nowList: [],
      pageNum: 1,
    };
  }

  //

  // 点击切换  页面刷新
  async componentDidMount() {
    window.addEventListener("hashchange", () => {
      this.getData(this.changeUrl());
    });
    window.addEventListener("load", () => {
      this.getData(this.changeUrl());
    });
  }

  search = async () => {
    console.log("滚动触发了");
    const { nowApi, pageNum, nowList } = this.state;
    await axios({
      method: "get",
      url: nowApi,
      params: {
        page: pageNum,
      },
    })
      .then((res) => {
        this.setState({
          nowList: [...nowList, ...res.data.items].slice(0, pageNum * 10),
          pageNum: pageNum + 1,
        });
      })
      .catch((err) => {
        console.log(err);
        alert("请求超时");
      });
  };

  getData = async (nowUrl) => {
    await axios
      .get(nowUrl)
      .then((res) => {
        this.setState({
          nowList: res.data.items.slice(0, 10),
        });
      })
      .catch((err) => {
        console.log(err);
        alert("请求超时");
      });
  };

  changeUrl = () => {
    this.setState({
      nowList: [],
      pageNum: 1,
    });
    const lang = window.location.hash.split("=")[1];
    // console.log('设置的时候', window.location.hash.split('=')[1]);
    let nowUrl =
      "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
    if (lang === "All" || lang === undefined) {
      nowUrl =
        "https://api.github.com/search/repositories?q=stars:%3E1&sort=stars&order=desc&type=Repositories";
    } else {
      nowUrl = `https://api.github.com/search/repositories?q=stars:%3E1+language:${lang}&sort=stars&order=desc&type=Repositories`;
    }
    console.log(nowUrl);
    this.setState({
      nowApi: nowUrl,
    });
    return nowUrl;
  };

  render() {
    return (
      <div>
        <Header />(
        <InfiniteScroll
          pageStart={1}
          loadMore={this.search}
          hasMore
          useWindow
          loader={
            <div className="loader" style={{ textAlign: "center" }} key={0}>
              Loading ...
            </div>
          }
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexFlow: "row wrap",
              marginTop: "30px",
            }}
          >
            {this.state.nowList.map((item, key) => (
              <Card item={item} index={key} key={key} />
            ))}
          </div>
        </InfiniteScroll>
        )
        <Footer>
          <span>版权所有 &copy; xxn</span>
        </Footer>
      </div>
    );
  }
}
export default Popular;
