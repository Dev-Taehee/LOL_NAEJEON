# 디스코드 롤 내전 봇

## 개요
게임동아리에서 동아리원들과 롤 내전을 진행할 때, 매번 랜덤하게 팀을 나누는데 그 과정이 중복된 작업이 많고 자동화 할 요지가 있다고 생각되어 만들어보았습니다. </br>
</br>
**기존 진행 방식**  </br>
기존에는 네이버 사다리타기에서 내전에 참여할 팀원들의 이름을 하나하나 입력하고 밑에 1팀, 2팀을 반복적으로 작성한 뒤, 결과에 따라 각자 자신의 팀을 파악 후 직접 음성 채널을 움직이는 방식이었습니다.  </br>
(채널이동까지 약 60초 소요) </br>
<img src="img/ladder_game.gif" loop=infinite />
</br>
**개선 방안**  </br>
디스코드에서 제공하는 discord.js API를 활용하여 음성 채널에 참여한 10명의 인원을 한번에 파악한 후, 5대5로 랜덤하게 나누어준 뒤 자동으로 음성채널을 옮겨주는 방식으로 개선하였습니다.  </br>
(채널이동까지 약 15초 소요) </br>
<img src="img/discord.gif" loop=infinite />
</br>

## 사용하려면  </br>
제 코드를 가져간 후, config-sample.json 파일의 이름을 config.json 파일로 변경합니다.  </br>
config.json 파일에 설정된 값들을 필요에 맞게 입력하시면됩니다.  </br>

