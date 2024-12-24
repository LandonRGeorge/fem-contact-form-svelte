let n = Date.now();

// pretty much a sequence, used to number html elements in the same app

export function seqid() {

  return (++n).toString(36);

}