//Script to get three latest events
$(document).ready(function() {
  $.each($('ul#upcomingEvents'), function(index, item) {
    var url = 'https://www.googleapis.com/calendar/v3/calendars/rilapa664%40gmail.com/events?' + $.param({
      maxResults: 3,
      orderBy: 'startTime',
      singleEvents: true,
      timeMin: moment().utc().format('YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'),
      key: 'AIzaSyBCQh4dJK0-skV7j8FykWG3CKseT3QuzFc'
    });
    $.get(url, function(data) {
      $.each(data.items, function(subindex, subitem) {
        var date = subitem.start.date;
        if (!date) {
          date = subitem.start.dateTime;
        }
        date = moment(date);
        $(item).append(
          $('<li>', {
            class: 'list-group-item'
          }).append(
            $('<span>', {
              html: date.fromNow(),
              class: 'badge'
            })).append(
            $('<h4>', {
              html: date.format('LL'),
              class: 'list-group-item-heading'
            })).append(
            $('<span>', {
              html: subitem.summary,
              class: 'list-group-item-text'
            })
          )
        );
      });
    });
  });
});