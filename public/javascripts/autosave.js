var Autosave = Class.create({
  initialize: function(element) {
    this.playerForm = element;
    new Form.Observer(this.playerForm, 1, this.handleForm.bind(this));
  },
  
  handleForm: function(form, value) {
    this.clearCookies();
    var chunks = form.serialize().toArray().eachSlice(128);
    this.setCookies(chunks);
  },
  
  clearCookies: function() {
    var count = Cookie.get('player_chunk_count');
    if(count != null) {
      count = parseInt(count);
      for(i = 1; i <= count; i++) {
        Cookie.erase('player_chunk_' + i);
      }
      Cookie.erase('player_chunk_count');
    }
  },
  
  setCookies: function(chunks) {
    Cookie.set('player_chunk_count', chunks.length, 365);
    
    $R(1, chunks.length).each(function(number, index) {
      Cookie.set('player_chunk_' + number, chunks[index].join(''), 365);
    });
  }
});

document.observe("dom:loaded", function() {
  new Autosave($('new_player'));
});