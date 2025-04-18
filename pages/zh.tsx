import Layout from '../components/Layout'
import dynamic from 'next/dynamic';
import AppCard from '../components/AppCard';
import styles from '../style/zh.module.css'

const GitHubButton = dynamic(() => import('react-github-btn'), { ssr: false })

const IndexPage = () => (
  <Layout title="主页 | 关于东索">
    <div className={styles.zhPageContainer}>
      <div className="lang-switch">
        <a href="/">English</a>
      </div>
      <div className={styles.headSection}>
        <h1>WELCOME</h1>
        <h2>你好，我是东索.</h2>
        <div className={styles['head-illustration']}></div>
      </div>
      <div className={styles.selfIntro}>
        <h3>自我介绍</h3>
        <p>
          我是东索(DongSuo)，是一名程序员， 1992 年生人，2011 年到 2018 年，在武汉生活了七年，我目前居住在上海，
          在 <a href="https://www.bytedance.com" target="_blank">字节跳动</a>工作。
        </p>
        <p>
          我在武汉大学读了本科和研究生，专业是图书馆学，这是一门关于信息组织和信息管理等知识的学科，后来自学了编程，
          目前仍然在努力自学中，期望能对计算机有更深入的理解。
        </p>
      </div>

      <div className={styles.likesSection}>
        <h3>我的一些小癖好</h3>
        <div className={styles.likesSectionBody}>
          <p>
            我喜欢读书，主要读历史、社会学、哲学等题材。
          </p>
          <p>
            我是个理想主义者，虽然有时候会感到绝望，但是我相信这个世界会好的
          </p>
          <p>
            我最喜欢的歌手是<a href="https://zh.wikipedia.org/wiki/%E6%9D%8E%E5%BF%97" target="_blank">李志</a>.
          </p>
          <p>
            我喜欢苹果产品的设计，但是我不喜欢苹果封闭的软件生态。
            这也是我不喜欢微信和腾讯的原因，我正在努力尽量戒断微信
          </p>
        </div>
        <div className={styles.decorationPoints}></div>
      </div>
      <p className={styles.aboutDream}>
        我的主职工作是前端程序员，但是我的梦想是做一款优雅的产品。
      </p>
      <div className={styles.myWorks}>

        <p>这是我的一些作品:</p>

        <AppCard
          title="Read Copilot"
          description="一个帮助你更好地阅读的iOS应用"
          icon="https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/06/1b/d0/061bd020-1f14-642f-9de9-b14983e2322d/AppIcon-0-0-1x_U007epad-0-1-85-220.png/246x0w.webp"
          link="https://apps.apple.com/us/app/read-copilot/id6449242676"
        />
        <AppCard
          title="Life Progress"
          description="一个帮助你追踪生命进程的iOS应用"
          icon="https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/22/ff/ad/22ffaddc-69be-1a3e-3daa-d6ebd065d792/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/320x0w.webp"
          link="https://apps.apple.com/us/app/life-progress-with-widget/id6740145361"
        />

        <div className="repo-card" data-repo="dongsuo/vue-data-board"></div>
        <div className="repo-card" data-repo="dongsuo/vue-terminal"></div>
        <p> 我还有一个 <a href="https://blog.islasher.com">博客</a>. </p>
        <p>你可以在这里找到我:</p>
        <GitHubButton href="https://github.com/dongsuo" aria-label="Follow @dongsuo on GitHub"> @dongsuo</GitHubButton>
        <p>
          如果你对我或者我的作品感兴趣，想跟我聊聊，欢迎你发邮件给我：
          <a href="mailto:xuxiaofei915@gmail.com">xuxiaofei915@gmail.com</a>, 我不善社交，但是我会回复你的.
        </p>
      </div>
      <div className={styles.bottomShape}></div>
    </div>
  </Layout>
)

export default IndexPage
