import style from '../../../resources/mapstyle.json'

export default function mapStyle() {
  const mapKey = process.env.NEXT_PUBLIC_MAPTILER_KEY || 'YOUR_MAPTILER_KEY'
  const styleString = JSON.stringify(style).replace(/MAPKEY/g, mapKey)
  return JSON.parse(styleString)
}
