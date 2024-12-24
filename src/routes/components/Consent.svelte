<script>
  let {consent, handleChange} = $props();
  import Error from './Error.svelte'
</script>

<div class="consent">
  <div class="consent-control">
    <input type="checkbox" id="consent" name="consent" value={consent.value} onchange={handleChange}>
    <label for="consent" class="is-required">I consent to being contacted by the team</label>
  </div>
  <Error error={consent.error} />
</div>