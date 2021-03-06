// copyright by Pimp Trizkit, http://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors

export default function shadeColor(color, percent) {
	color = color.slice(1)
	color = color.length === 3 ? color.replace(/(\d)/g, '$1$1') : color

	var f = parseInt(color, 16),
		t = percent < 0 ? 0 : 255,
		p = percent < 0 ? percent * -1 : percent,
		R = f >> 16,
		G = f >> 8 & 0x00FF,
		B = f & 0x0000FF
	return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1)
}
