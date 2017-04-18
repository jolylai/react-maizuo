import React,{ Component } from 'react'
import { Layout } from 'antd'

const { Footer } = Layout;

class LFooter extends Component{
  constructor(){
    super()
  }
  componentWillMount(){

  }
  render(){
    return(
        <Footer className="footer">
          <h2>电影订座  就上卖座</h2>
          <div className="server">
            <span>电话 / QQ：</span><span className="mobile">400-1808-400</span>
            <span > 周日-周四：9:00-22:00  周五-周六：9:00-22:30</span>
          </div>
          <div className="follow">
            <img src="../favicon.ico" alt="maizuo"/>
            <img src="../favicon.ico" alt="weixin"/>
            <img src="../favicon.ico" alt="weibo"/>
          </div>
          <div className="copyright">
            <ul>
              <li><a>关于卖座 |</a></li>
              <li><a>联系我们 |</a></li>
              <li><a>商务合作 |</a></li>
              <li><a>合作伙伴 |</a></li>
              <li><a>诚聘英才 |</a></li>
              <li><a>使用帮助 |</a></li>
              <li><a>退票服务 |</a></li>
              <li><a>服务条款 |</a></li>
              <li><a>社区管理 </a></li>
            </ul>
            <span>Copyright © 2017 maizuo. All Rights Reserved 卖座网 版权所有 增值业务经营许可证:粤B2-200502318</span>
          </div>
        </Footer>
    )
  }
}

export default LFooter;
