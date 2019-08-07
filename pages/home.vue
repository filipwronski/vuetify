<template>
    <section>
        <p>test</p>
    </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component

export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>

.claim {
    margin-bottom: 12px;
    &__title{
        @include font(24px, 600);
        padding: 15px 0 20px;
        line-height: 1.33;
        letter-spacing: 0.6px;
        text-align: center;
        color: $dark-blue;
        span {
            font-size: 34px;
        }
    }
    &__img {
        width: 100%;
        display: block;
        min-height: 40vw;
    }
}
.home-search {
    &__title {
        padding: 0 16px;
        @include font(20px, 500);
        letter-spacing: 0.15px;
        color: $dark-blue;
        line-height: 1.4;
        margin-bottom: 12px;
        ::v-deep .v-icon {
            color: $dark-blue;
            margin-right: 3px;
        }
    }
}

.locations-tabs {
    &__separator {
        height: 16px;
        background: $gray-2;
        margin-bottom: 24px;
    }
}
</style>
