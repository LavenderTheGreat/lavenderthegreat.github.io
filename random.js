const variants = [
    {
        "id":"bee",
        "bg":"#fef6f2",
        "accent":"#f89982",
        "accent2":"#fad3c2",
        "outline":"#17283c",
        "source":"https://twitter.com/LavenderTGreat/status/1325912252290109441/"
    },
    {
        "id":"etna",
        "bg":"#fff7f8",
        "accent":"#ff4f69",
        "accent2":"#cc3266",
        "outline":"#3e2653",
        "source":"https://twitter.com/LavenderTGreat/status/1331715224399966208/"
    },
    {
        "id":"rosa",
        "bg":"#EBE5CE",
        "accent":"#f99c67",
        "accent2":"#a5e5ce",
        "outline":"#3e2653",
        "source":"https://twitter.com/LavenderTGreat/status/1330689512272498690/"
    }
]

let variant = Math.floor(Math.random() * variants.length)

console.log("Variant: " + variant + " - " + variants[variant].id)

document.documentElement.style.setProperty('--pal0', variants[variant].outline);
document.documentElement.style.setProperty('--pal1', variants[variant].accent);
document.documentElement.style.setProperty('--pal2', variants[variant].accent2);
document.documentElement.style.setProperty('--pal3', variants[variant].bg);
document.documentElement.style.setProperty('--tile', "url('themes/" + variants[variant].id + "tile.png");
document.documentElement.style.setProperty('--icon', "url('themes/" + variants[variant].id + "icon.png");

document.getElementById("source").setAttribute("href", variants[variant].source)