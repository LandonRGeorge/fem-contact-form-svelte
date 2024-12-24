<script>
  import QueryTypeControl from "./QueryTypeControl.svelte";

  let {queryType, handleChange} = $props();

  import Error from './Error.svelte'
</script>

<fieldset class="query-type">
  <legend class="is-required">Query Type</legend>
  <div class="query-type-controls">
    <QueryTypeControl label="General Enquiry" value="general-enquiry" queryType={queryType.value} {handleChange}/>
    <QueryTypeControl label="Support Request" value="support-request" queryType={queryType.value} {handleChange}/>
  </div>
  <Error error={queryType.error} />
</fieldset>