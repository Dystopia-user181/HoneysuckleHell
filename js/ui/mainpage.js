"use strict";

Vue.component("main-page", {
    component: {
        "main-page-button": {
            template: 
                `<primary-button
                class="o-primary-button"
                @click="doClick"
                ><slot /></primary-button>`
        }
    },
    computed: {
        HS() {
            return `You have ${this.honeysuckles}.`;
        },
        HSAmount() {
            return `There are ${this.honeysucklesAmount} in this field.`;
        },
        HB() {
            return `You have ${this.honeybees}.`;
        },
        Honey() {
            return `You have ${this.honey}.`;
        },
        Gathering() {
            return `Collect ${this.collecting} from the field.`;
        },
        Replanting() {
            return `Replant ${this.replanting} into the field.`;
        }
    },
    data() {
        return {
            honeysuckles: 0,
            honeysucklesAmount: 200,
            honeybees: 0,
            honey: 0,
            money: 0
        };
    },
    methods: {
        update() {
            const mainpage = gameData;
            this.honeysuckles = mainpage.honeysuckles;
            this.honeysucklesAmount = mainpage.honeysucklesAmount;
            this.honeybees = mainpage.honeybees;
            this.honey = mainpage.honey;
            this.money = mainpage.money;
            this.collecting = mainpage.honeysuckle.collecting;
            this.replanting = mainpage.honeysuckle.replanting;
        }
    },
    template: 
    `
    <div>{{ HS }}</div>
    <br>
    <div>{{ HSAmount }}</div>
    <br><br>
    <main-page-button
    onclick="gather()"
    >{{ Gathering }}</main-page-button>
    <main-page-button
    onclick="replant()"
    >{{ Replanting }}</main-page-button>
    <br>
    <div>{{ HB }}</div>
    <br>
    <div>{{ Honey }}</div>
    >
    `
}
);