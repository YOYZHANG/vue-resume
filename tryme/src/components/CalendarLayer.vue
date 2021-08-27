<template>
    <div class="ui-calendar-layer">
        <div>
            <i @click="prev">previous</i>
            <b>{{viewYear}} - {{viewMonth + 1}}</b>
            <i @click="later">later</i>
        </div>
        <ol>
            <li>一</li>
            <li>二</li>
            <li>三</li>
            <li>四</li>
            <li>五</li>
            <li>六</li>
            <li>日</li>
        </ol>
        <ol>
            <li v-for="item in datas" :key="item" @click="select(item)">{{item}}</li>
        </ol>
    </div>


</template>
<script>
export default {
    data() {
        return {
            datas: [],
            currDate: this.value
        }
    },
    props: ['value'],
    computed: {
        viewYear() {
            return this.currDate.getFullYear()
        },
        viewMonth() {
            return this.currDate.getMonth()
        }
    },
    created() {
        this.updateDates();
    },
    methods: {
        prev(){
            this.viewMonth = this.viewMonth - 1;
            this.updateDates();
        },
        later(){
            this.viewMonth = this.viewMonth + 1;
            this.updateDates();
        },
        updateDates() {
            let viewDate = new Date(this.viewYear, this.viewMonth, 1);
            let day = viewDate.getDay() - 1;
            let datas = Array.from({length: day}, () => '');
            let nextDate = new Date(this.viewYear, this.viewMonth + 1, 1);
            let days = (nextDate - viewDate) / 24 / 60 / 60 / 1000;
            for (let i = 1; i < days; i++) {
                datas.push(i);
            }

            this.datas = datas;
        },
        select(item) {
            let newDate = new Date(
                this.viewYear,
                this.viewMonth,
                item
            );
            this.currDate = newDate;
            this.$emit('select', newDate);

        }
    }
}
</script>
<style>
</style>