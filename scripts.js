document.getElementById('replayForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const youtubeId = document.getElementById('youtubeId').value;
    const startTime = document.getElementById('startTime').value;
  
    const replayData = {
      youtubeId: youtubeId,
      startTime: startTime
    };
  
    localStorage.setItem('replayData', JSON.stringify(replayData));
  
    alert('Replay started!');
  });
  