import { useRef } from "react"
import { useFrame } from "@react-three/fiber"

const Box = (props) => {
  const mesh = useRef()

  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))

  return (
    <mesh
      {...props}
      ref={mesh}
    >
      <boxGeometry args={[1, 1, 1]}/>
      <meshStandardMaterial />
    </mesh>
  )
}

export default Box;
