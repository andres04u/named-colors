// Based on https://developer.mozilla.org/en-US/docs/Web/CSS/named-color .
const colors = {
    // CSS1:
    'black': [0, 0, 0],
    'silver': [192, 192, 192],
    'gray / grey': [128, 128, 128],
    'white': [255, 255, 255],
    'maroon': [128, 0, 0],
    'red': [255, 0, 0],
    'purple': [128, 0, 128],
    'fuchsia / magenta': [255, 0, 255],
    'green': [0, 128, 0],
    'lime': [0, 255, 0],
    'olive': [128, 128, 0],
    'yellow': [255, 255, 0],
    'navy': [0, 0, 128],
    'blue': [0, 0, 255],
    'teal': [0, 128, 128],
    'aqua / cyan': [0, 255, 255],

    'orange': [255, 165, 0],
    'aliceblue': [240, 248, 255],
    'antiquewhite': [250, 235, 215],
    'aquamarine': [127, 255, 212],
    'azure': [240, 255, 255],
    'beige': [245, 245, 220],
    'bisque': [255, 228, 196],
    'blanchedalmond': [255, 235, 205],
    'blueviolet': [138, 43, 226],
    'brown': [165, 42, 42],
    'burlywood': [222, 184, 135],
    'cadetblue': [95, 158, 160],
    'chartreuse': [127, 255, 0],
    'chocolate': [210, 105, 30],
    'coral': [255, 127, 80],
    'cornflowerblue': [100, 149, 237],
    'cornsilk': [255, 248, 220],
    'crimson': [220, 20, 60],
    'darkblue': [0, 0, 139],
    'darkcyan': [0, 139, 139],
    'darkgoldenrod': [184, 134, 11],
    'darkgray / darkgrey': [169, 169, 169],
    'darkgreen': [0, 100, 0],
    'darkkhaki': [189, 183, 107],
    'darkmagenta': [139, 0, 139],
    'darkolivegreen': [85, 107, 47],
    'darkorange': [255, 140, 0],
    'darkorchid': [153, 50, 204],
    'darkred': [139, 0, 0],
    'darksalmon': [233, 150, 122],
    'darkseagreen': [143, 188, 143],
    'darkslateblue': [72, 61, 139],
    'darkslategray / darkslategrey': [47, 79, 79],
    'darkturquoise': [0, 206, 209],
    'darkviolet': [148, 0, 211],
    'deeppink': [255, 20, 147],
    'deepskyblue': [0, 191, 255],
    'dimgray / dimgrey': [105, 105, 105],
    'dodgerblue': [30, 144, 255],
    'firebrick': [178, 34, 34],
    'floralwhite': [255, 250, 240],
    'forestgreen': [34, 139, 34],
    'gainsboro': [220, 220, 220],
    'ghostwhite': [248, 248, 255],
    'gold': [255, 215, 0],
    'goldenrod': [218, 165, 32],
    'greenyellow': [173, 255, 47],
    'honeydew': [240, 255, 240],
    'hotpink': [255, 105, 180],
    'indianred': [205, 92, 92],
    'indigo': [75, 0, 130],
    'ivory': [255, 255, 240],
    'khaki': [240, 230, 140],
    'lavender': [230, 230, 250],
    'lavenderblush': [255, 240, 245],
    'lawngreen': [124, 252, 0],
    'lemonchiffon': [255, 250, 205],
    'lightblue': [173, 216, 230],
    'lightcoral': [240, 128, 128],
    'lightcyan': [224, 255, 255],
    'lightgoldenrodyellow': [250, 250, 210],
    'lightgray / lightgrey': [211, 211, 211],
    'lightgreen': [144, 238, 144],
    'lightpink': [255, 182, 193],
    'lightsalmon': [255, 160, 122],
    'lightseagreen': [32, 178, 170],
    'lightskyblue': [135, 206, 250],
    'lightslategray / lightslategrey': [119, 136, 153],
    'lightsteelblue': [176, 196, 222],
    'lightyellow': [255, 255, 224],
    'limegreen': [50, 205, 50],
    'linen': [250, 240, 230],
    'mediumaquamarine': [102, 205, 170],
    'mediumblue': [0, 0, 205],
    'mediumorchid': [186, 85, 211],
    'mediumpurple': [147, 112, 219],
    'mediumseagreen': [60, 179, 113],
    'mediumslateblue': [123, 104, 238],
    'mediumspringgreen': [0, 250, 154],
    'mediumturquoise': [72, 209, 204],
    'mediumvioletred': [199, 21, 133],
    'midnightblue': [25, 25, 112],
    'mintcream': [245, 255, 250],
    'mistyrose': [255, 228, 225],
    'moccasin': [255, 228, 181],
    'navajowhite': [255, 222, 173],
    'oldlace': [253, 245, 230],
    'olivedrab': [107, 142, 35],
    'orangered': [255, 69, 0],
    'orchid': [218, 112, 214],
    'palegoldenrod': [238, 232, 170],
    'palegreen': [152, 251, 152],
    'paleturquoise': [175, 238, 238],
    'palevioletred': [219, 112, 147],
    'papayawhip': [255, 239, 213],
    'peachpuff': [255, 218, 185],
    'peru': [205, 133, 63],
    'pink': [255, 192, 203],
    'plum': [221, 160, 221],
    'powderblue': [176, 224, 230],
    'rosybrown': [188, 143, 143],
    'royalblue': [65, 105, 225],
    'saddlebrown': [139, 69, 19],
    'salmon': [250, 128, 114],
    'sandybrown': [244, 164, 96],
    'seagreen': [46, 139, 87],
    'seashell': [255, 245, 238],
    'sienna': [160, 82, 45],
    'skyblue': [135, 206, 235],
    'slateblue': [106, 90, 205],
    'slategray / slategrey': [112, 128, 144],
    //'slategrey': [112, 128, 144],
    'snow': [255, 250, 250],
    'springgreen': [0, 255, 127],
    'steelblue': [70, 130, 180],
    'tan': [210, 180, 140],
    'thistle': [216, 191, 216],
    'tomato': [255, 99, 71],
    'turquoise': [64, 224, 208],
    'violet': [238, 130, 238],
    'wheat': [245, 222, 179],
    'whitesmoke': [245, 245, 245],
    'yellowgreen': [154, 205, 50],
    'rebeccapurple': [102, 51, 153],
};

// Based on https://stackoverflow.com/a/54070620/91238 .
// input: r,g,b in [0,1], out: h in [0,360) and s,v in [0,1]
function rgb2hsv(r, g, b) {
    let v = Math.max(r, g, b), c = v - Math.min(r, g, b);
    let h = c && ((v == r) ? (g - b) / c : ((v == g) ? 2 + (b - r) / c : 4 + (r - g) / c));
    return [60 * (h < 0 ? h + 6 : h), v && c / v, v];
}

// For the whole color wheel, radius and center x/y.
const radius = 512;
const cx = radius;
const cy = radius;

const svg = document.querySelector('svg');
const styleSheet = document.styleSheets[0];

// TODO: Select-able color categories, re-render wheel.
function renderWheel() {
    let colorsBySite = {};
    let sites = [];
    Object.entries(colors).forEach(([name, color], _) => {
        let [r, g, b] = color;
        let [h, s, v] = rgb2hsv(r / 255, g / 255, b / 255);

        // Based on https://stackoverflow.com/a/54522007/91238 .
        // I've tweaked it to spread out some of the colors (especially they greys)
        // that don't fit well into a true H/S wheel.
        let colorRadius = (s + v / 5) * 0.75 * radius;
        let colorAngle = h / 360 * 2 * Math.PI;

        let x = Math.cos(colorAngle) * colorRadius + cx;
        let y = Math.sin(colorAngle) * colorRadius + cy;
        sites.push({ x: x, y: y });
        colorsBySite[[x, y]] = name;
    });

    let voronoi = new Voronoi().compute(sites, { xl: 0, xr: 1024, yt: 0, yb: 1024 });
    voronoi.cells.forEach(cell => {
        if (cell.closeMe) {
            console.warn('cell', cell, 'needs closing');
            return;
        }
        let colorName = colorsBySite[[cell.site.x, cell.site.y]];
        let [r, g, b] = colors[colorName];

        let c = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        c.setAttribute('data-color', colorName);
        c.setAttribute('mask', 'url(#circle-mask)');

        let points = '';
        cell.halfedges.forEach(edge => {
            let s = edge.getStartpoint();
            let e = edge.getEndpoint();
            points += `${s.x} ${s.y}, `;
        });
        points = points.replace(/, $/, '');
        c.setAttribute('points', points);

        svg.appendChild(c);
        let rgb = `rgb(${r}, ${g}, ${b})`;
        styleSheet.insertRule(`[data-color='${colorName}'] { fill: ${rgb}; stroke: ${rgb}; }`);
    });
}
renderWheel();

function activateColor(el) {
    renderPreview(el.getAttribute('data-color'));
    // Move the SVG node to the end, so it(s stroke) will draw above all others.
    el.parentNode.appendChild(el);
    // Force its stroke to be black.  (Doing this with CSS doesn't work; the
    // hover state is broken by mutating the DOM.)
    el.style.stroke = 'black';
    el.style.strokeWidth = '5px';
}

// https://stackoverflow.com/a/5624139/91238
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

let previewLocked = false;
function renderPreview(color) {
    if (!color) {
        document.getElementById('preview').innerHTML = '';
        return;
    }
    let [r, g, b] = colors[color];

    document.getElementById('preview').innerHTML = `
    ${color}
        <span class="swatch"
        style="background-color: ${rgbToHex(r, g, b)};">&nbsp;</span>
    ${rgbToHex(r, g, b).toUpperCase()}
    `;
}

svg.addEventListener('mouseover', e => {
    let el = e.target;
    if (el.tagName != 'polygon') return;
    if (!el.nextElementSibling) return;

    if (!previewLocked) {
        activateColor(el);
    }
});
svg.addEventListener('mouseout', e => {
    let el = e.target;
    if (el.tagName != 'polygon') return;
    if (!previewLocked) {
        renderPreview(null);
        // Reset forced stroke from mouseover.
        el.removeAttribute('style');
    }
});
document.body.addEventListener('click', e => {
    let el = e.target;

    // Ignore clicks, i.e. to select, in the preview.
    if (document.getElementById('preview').contains(el)) return;

    // Remove possible forced stroke from previously-locked color.
    document.querySelectorAll('polygon[style]').forEach(el => {
        el.removeAttribute('style');
    });

    if (el.tagName != 'polygon') {
        previewLocked = false;
        renderPreview(null);
        return;
    }

    previewLocked = true;
    activateColor(el);
});