<template>
    <section id="contact">
        <div class="container max-w-4xl mx-auto py-12">
            <div class="">
                <h4 class="text-4xl font-header text-center">
                    Take the next step
                </h4>
                <br />
                <p class="text-center"></p>
            </div>
            <div
                class="md:py-8 max-w-lg mx-auto flex gap-4 flex-col md:flex-row"
            >
                <div class="grow">
                    <div v-if="!isSent">
                        <input
                            class="w-full bg-[var(--color-background)] p-4 focus:outline-none focus:border-b"
                            v-model="email"
                            placeholder="EMAIL"
                        />
                        <textarea
                            rows="4"
                            class="w-full bg-[var(--color-background)] p-4 focus:outline-none focus:border-b"
                            v-model="message"
                            placeholder="MESSAGE"
                        />
                    </div>
                    <p v-else>Thanks so much!</p>
                </div>
                <div class="flex justify-end items-center">
                    <button
                        v-if="!isSent"
                        class="btn"
                        :class="!isValidEmail && 'btn-disabled'"
                        :disabled="!isValidEmail"
                        @click="send"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import emailjs from "@emailjs/browser";
const email = ref("");
const message = ref("");
const isSent = ref(false);

const isValidEmail = computed(() => {
    return email.value.includes("@") && email.value.includes(".");
});

const send = () => {
    const templateParams = {
        website: "davidsorensen.bio",
        name: "",
        email: email.value,
        comment: message.value,
    };
    email.value = "";
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

<style scoped></style>
