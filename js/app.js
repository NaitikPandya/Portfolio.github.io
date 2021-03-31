let typing_animation_contents = document.querySelectorAll('.animate');

if (typing_animation_contents) {
    typing_animation_contents.forEach(typing_animation_content => {
        let placeholder_text = typing_animation_content.getAttribute('placeholder'),
            Length = placeholder_text.length,
            i = 0,
            speed = 140,
            delay = 4000,
            needDelay = false;

        typing_animation_content.setAttribute('placeholder', '');

        setInterval(() => {
            if (needDelay == false) {
                i++;

                if (i == Length) {
                    needDelay = true;

                    setTimeout(() => {
                        needDelay = false;
                    }, delay);

                    typing_animation_content.setAttribute('placeholder', placeholder_text.substring(0, i))
                } else {
                    typing_animation_content.setAttribute('placeholder', placeholder_text.substring(0, i) + "|")

                    if (i > Length) {
                        i = 0;
                    }
                }
            }

        }, speed);
    });
}