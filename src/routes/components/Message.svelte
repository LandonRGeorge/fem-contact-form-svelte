<script>
  let {message, handleChange} = $props();
  import Error from './Error.svelte'
</script>

<div class="message">
  <label for="message" class="is-required">Message</label>
  <textarea name="message" id="message" cols="30" rows="5" oninput={handleChange}>{message.value}</textarea>
  <Error error={message.error} />
</div>