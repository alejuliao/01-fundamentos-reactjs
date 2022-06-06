import styles from './Post.module.scss'
export function Post(props){
  return(
    <>
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/alejuliao.png" />
          <div className={styles.authorInfo}>
            <strong>Ale juliao</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='11 de maio ' dateTime='2022-05-11 98:13:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        <p>Quis autem, amet sunt consequatur necessitatibus quam iure aspernatur voluptatibus, ex ad.</p>
        <p><a>Minima vero non neque ipsam ipsum quo! Harum, quasi velit!</a></p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
    </article> 
    </>
  )
}