import {useState, useEffect, CSSProperties} from 'react'

export const useAnimatedScale = (scGap : number = 0.01, delay : number = 20) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
} 

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    }, [])
}

const sinify = (scale : number) : number => Math.sin(scale * Math.PI)

export const useStyle = (w : number, h : number, scale : number) => {
    const position = "absolute"
    const background = "indigo"
    const size = Math.min(w, h) / 10 
    return {
        barStyle() : CSSProperties {
            const width = `${size / 3}px`
            const height = `${size}px`
            const top = `${h - h * 0.5 * sinify(scale)}px`
            const left = `${w / 2 - size / 6}px`
            return {
                background, 
                position, 
                width, 
                height, 
                top, 
                left
            }
        },
        dotStyle() : CSSProperties {
            const width = `${size / 5}px`
            const height = `${size / 5}px`
            const left = `${(w / 2 - size / 2) * sinify(scale)}px`
            const top = `${h / 2 - size / 5}px`
            const position = 'absolute'
            const borderRadius = `50%`
            return {
                width, 
                height, 
                position, 
                left, 
                top, 
                background, 
                borderRadius 
            }
        }
    }
}