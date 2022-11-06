<template>
    <modal-toggle-btn modalName='seasonFilterModal'>
        <template v-slot:button>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 11 3 C 10.621 3 10.275469 3.2137344 10.105469 3.5527344 C 9.9364688 3.8917344 9.9712188 4.2966094 10.199219 4.5996094 L 13 8.3320312 L 13 41.667969 L 9.1992188 45.400391 C 8.9722187 45.703391 8.9374687 46.108266 9.1054688 46.447266 C 9.2754687 46.786266 9.621 47 10 47 L 39 47 C 39.304 47 39.59125 46.862 39.78125 46.625 L 44.78125 41.625 C 45.02125 41.324 45.066391 40.913406 44.900391 40.566406 C 44.733391 40.221406 44.385 40 44 40 L 23 40 L 23 4 C 23 3.447 22.553 3 22 3 L 11 3 z M 25 7 L 25 9 C 34.925 9 43 17.075 43 27 C 43 31.144 41.578797 34.954 39.216797 38 L 41.685547 38 C 43.774547 34.841 45 31.063 45 27 C 45 15.972 36.028 7 25 7 z M 25 11 L 25 38 L 36.589844 38 C 39.315844 35.13 41 31.262 41 27 C 41 18.178 33.822 11 25 11 z M 11 12.740234 C 7.544 16.134234 5.3072969 20.765109 5.0292969 25.912109 C 5.0102969 26.272109 5 26.635 5 27 C 5 27.59 5.0261719 28.174953 5.0761719 28.751953 C 5.5021719 33.631953 7.693 38.012766 11 41.259766 L 11 38.287109 C 8.503 35.197109 7 31.273 7 27 C 7 22.727 8.503 18.802891 11 15.712891 L 11 12.740234 z M 11 19.271484 C 9.729 21.564484 9 24.198 9 27 C 9 29.802 9.729 32.435516 11 34.728516 L 11 19.271484 z"/></svg>
            <span>시즌 </span>
        </template>
        <template v-slot:modal>
            <team-player-modal/>
        </template>
    </modal-toggle-btn>

    <modal-toggle-btn modalName='teamFilterModal'>
        <template v-slot:button>
            <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px"><path d="M 11 3 C 10.621 3 10.275469 3.2137344 10.105469 3.5527344 C 9.9364688 3.8917344 9.9712188 4.2966094 10.199219 4.5996094 L 13 8.3320312 L 13 41.667969 L 9.1992188 45.400391 C 8.9722187 45.703391 8.9374687 46.108266 9.1054688 46.447266 C 9.2754687 46.786266 9.621 47 10 47 L 39 47 C 39.304 47 39.59125 46.862 39.78125 46.625 L 44.78125 41.625 C 45.02125 41.324 45.066391 40.913406 44.900391 40.566406 C 44.733391 40.221406 44.385 40 44 40 L 23 40 L 23 4 C 23 3.447 22.553 3 22 3 L 11 3 z M 25 7 L 25 9 C 34.925 9 43 17.075 43 27 C 43 31.144 41.578797 34.954 39.216797 38 L 41.685547 38 C 43.774547 34.841 45 31.063 45 27 C 45 15.972 36.028 7 25 7 z M 25 11 L 25 38 L 36.589844 38 C 39.315844 35.13 41 31.262 41 27 C 41 18.178 33.822 11 25 11 z M 11 12.740234 C 7.544 16.134234 5.3072969 20.765109 5.0292969 25.912109 C 5.0102969 26.272109 5 26.635 5 27 C 5 27.59 5.0261719 28.174953 5.0761719 28.751953 C 5.5021719 33.631953 7.693 38.012766 11 41.259766 L 11 38.287109 C 8.503 35.197109 7 31.273 7 27 C 7 22.727 8.503 18.802891 11 15.712891 L 11 12.740234 z M 11 19.271484 C 9.729 21.564484 9 24.198 9 27 C 9 29.802 9.729 32.435516 11 34.728516 L 11 19.271484 z"/></svg>
            <span>팀이름 </span>
        </template>
        <template v-slot:modal>
            <team-modal/>
        </template>
    </modal-toggle-btn>
        
    <div class="team-player-selected" v-if="params.season">
        <span>{{selectedParams()}}</span>
        <span @click="deleteTeamAndPlayer()" class="delete">x</span>
    </div>


</template>

<script>
import { mapGetters } from 'vuex';
// import {PLAYER_NOT_SELECTED} from '@/js/const';
import ModalToggleBtn from './ModalToggleBtn.vue';
import TeamPlayerModal from '@/components/modal/TeamPlayerModal.vue'
import TeamModal from '../modal/TeamModal.vue';

export default {
    components: { TeamPlayerModal, ModalToggleBtn, TeamModal },
    computed: {
         ...mapGetters({
            params: 'GET_QUERY_PARAMS'
        })
    },
    methods: {
        selectedParams() {
            let seasonTeam = this.params.season;
            if(this.params.team) {
                seasonTeam += `>${this.params.team}`;
            }
            return seasonTeam;
        },
        deleteTeamAndPlayer() {
            this.$store.commit('RESET_QUERY_PARAMS');
        }
    }
}
</script>

<style lang="scss" scoped>
button {
    width: 70px;
    height: $button-medium-height;
    border-radius: calc($border-radious / 2);
    border-width: 0.5px;
    border-color:  $color-light-gray;
    background-color: $color-button;
    color: $fonr-color-button;
    font-weight: $font-weight-huge;
    margin-right: 5px;
    font-size: $font-small;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
}
.team-player-selected {
    position: absolute;
    top: $button-medium-height;
    background-color: $color-light-gray;
    font-size: $font-very-small;
    display: flex;
    margin: 10px 0 0;
    padding: 0 7px 0;
    height: 30px;
    align-items: center;
    border-radius: $border-radious;
    color: white;
    span {
        line-height: 30px;
    }
    .delete {
        font-size: 25px;
        padding-left: 6px;
    }
}
</style>