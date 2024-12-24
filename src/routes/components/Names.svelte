<script>
  import Name from "./Name.svelte";

  let {fname, handleFirstName, lname, handleLastName} = $props();
</script>
<div class="names">
  <Name klass="fname" name={fname} handleChange={handleFirstName} label="First Name"/>
  <Name klass="lname" name={lname} handleChange={handleLastName} label="Last Name"/>
</div>