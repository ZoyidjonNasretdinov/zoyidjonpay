import { styles } from "../util/style"
import { statistics } from '../util/constants'

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {statistics.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className="font-monserrat">{stat.value}</h4>
          <p>{stat.title}</p>
        </div>
      ))}
    </div>
  )
}

export default Statistics