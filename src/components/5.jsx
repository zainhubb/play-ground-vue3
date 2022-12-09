import { NButton } from 'naive-ui'
import './5.postcss'
const app = defineComponent({
  setup() {
    const age = ref(0)
    const arr = ref([])
    const add = () => {
      arr.value.push(arr.value.length + 1)
    }
    return () => (
      <>
        <NButton onClick={add}>+</NButton>
        <div className="blocks">
          {arr.value.map((i) => (
            <div className="block text-red-800">{i}</div>
          ))}
        </div>
      </>
    )
  },
})
export default app
