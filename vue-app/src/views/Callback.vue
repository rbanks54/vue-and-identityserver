<template>
    <div>
        <p>Sign-in in progress</p>
    </div>
</template>

<script>
    export default {
        async created() {
            try {
                var result = await this.$root.mgr.signinRedirectCallback();
                var returnToUrl = '/';
                if (result.state !== undefined) { returnToUrl = result.state;}
                this.$router.push({ path: returnToUrl });
            } catch (e) {
                this.$router.push({ name: 'Unauthorized' });
            }
        }
    }
</script>