<template>
    <div class="container mx-auto px-4 md:px-48 my-12">
        <h2 class="mb-12 mt-24">CONTACT</h2>
        <div v-if="!isSent" class="p-8">
            <div class="grid md:grid-cols-12 gap-8">
                <div class="md:col-span-4">
                    <label for="name">Your Name:</label>
                    <input
                        id="name"
                        class="input"
                        v-model="name"
                        placeholder="Your Name"
                    />
                    <label for="comment">Your Message:</label>
                    <textarea
                        id="comment"
                        v-model="comment"
                        rows="4"
                        class="input"
                        placeholder="Write your thoughts here..."
                    />
                    <label for="email">Your Email:</label>
                    <input
                        id="email"
                        class="input"
                        v-model="email"
                        placeholder="Your Email"
                    />
                    <FormDropdown
                        label="I'm feeling..."
                        :options="letterFormats"
                        v-model="selectedVoice"
                    />
                </div>
                <div
                    class="md:col-span-8 md:px-4 flex flex-col justify-between"
                >
                    <p class="mb-4">
                        <transition>
                            <span v-if="name">
                                <p>{{ selectedText.salutation }}</p>
                                <br />
                                <span> {{ selectedText.name + name }}. </span>
                            </span>
                        </transition>
                        <transition>
                            <span class="whitespace-pre-wrap" v-if="comment">
                                {{
                                    selectedText.message +
                                    comment +
                                    lastCharacter
                                }}
                            </span>
                        </transition>
                        <transition>
                            <span v-if="email"
                                >{{ selectedText.email + email }}.
                            </span>
                        </transition>
                        <transition>
                            <div v-if="name && comment && email">
                                <div class="mt-4">
                                    {{ selectedText.farewell }}
                                </div>
                                <div>{{ name.split(" ")[0] }}</div>
                            </div>
                        </transition>
                    </p>
                    <div>
                        <button
                            class="btn mb-4"
                            :class="sendButtonDisabled && 'btn-disabled'"
                            :disabled="sendButtonDisabled"
                            @click="send"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div v-else><p>Thanks so much! I'll be in touch soon!</p></div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import emailjs from "@emailjs/browser";
const name = ref("");
const email = ref("");
const comment = ref("");
const isSent = ref(false);
const letterFormats = [
    {
        optionName: "Friendly",
        salutation: "Hello!",
        name: "My name is ",
        message: "I am writing to you today because ",
        email: "My email is ",
        farewell: "Thanks so much!",
    },
    {
        optionName: "Professional",
        salutation: "To Whom It May Concern,",
        name: "Good afternoon. My name is ",
        message: "The reason that I am writing to you today is this:  ",
        email: "If you would like to contact me via email, you can reach me at ",
        farewell: "Sincerely,",
    },
    {
        optionName: "Annoyed",
        salutation: "",
        name: "This is ",
        message: "I guess you're not aware of this, but ",
        email: "My email is ",
        farewell: "",
    },
    {
        optionName: "Flirty",
        salutation: "Hey handsome :)",
        name: "Guess who? It's ",
        message: "I guess I was just writing to say ",
        email: "Let's get in touch sometime! My email is ",
        farewell: "Yours,",
    },
    {
        optionName: "Hostile",
        salutation: "Hey motherfucker,",
        name: "This is ",
        message:
            "I guess you're probably too dumb to figure this out on your own, but ",
        email: "You have until the end of the day to email me at ",
        farewell: "I'm coming for you,",
    },
];
const selectedVoice = ref(letterFormats[0].optionName);
const selectedText = computed(() => {
    const f = letterFormats.filter(
        (format) => format.optionName === selectedVoice.value
    );
    return f[0];
});

const sendButtonDisabled = computed(() => {
    if (email.value && name.value && comment.value && isValidEmail.value) {
        return false;
    } else {
        return true;
    }
});

const isValidEmail = computed(() => {
    return email.value.includes("@") && email.value.includes(".");
});

const lastCharacter = computed(() => {
    const lc = comment.value.split("")[comment.value.length - 1];
    switch (lc) {
        case ".":
            return " ";
        case "?":
            return " ";
        case "!":
            return " ";
        default:
            return ". ";
    }
});

const send = () => {
    const templateParams = {
        website: "Author Portfolio",
        name: name.value,
        email: email.value,
        comment: comment.value,
    };
    name.value = "";
    email.value = "";
    comment.value = "";
    emailjs
        .send(
            "service_t1yo7dn",
            "template_pfang7n",
            templateParams,
            "aMDOy4kUud9rd0Yg9"
        )
        .then(function () {
            isSent.value = true;
        });
};
</script>

<style scoped>
.input {
    @apply block p-2.5 mt-1 mb-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500;
}

.v-enter-active,
.v-leave-active {
    transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>
