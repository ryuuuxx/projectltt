https://velog.io/@newnew_daddy/K8S09

k8s(promtail) >> Loki  >>> Grafana
https://wlsdn3004.tistory.com/48
- Loki: 로그 전체 txt가 아닌 metadata만 인덱싱
  >> 최소 인덱싱 접근 방법으로 다른 솔루션보다 적은 저장 공간을 필요로 한다.


1) 로그를 가져와 저장(w/ promtail)
2) grafana에서 LogQL이라는 쿼리 언어를 통해 로그 검색
3) 경고 규칙을 설정해서 Prometheus Alertmanager로 경고 발송 


1. Grafana Loki 설치(w/ Helm)
2. pv, pvc resource 생성 확인
3. Grafana 대시보드 접속
   1) 외부 접속 시 ClusterIP -> NodePort로 수정
   2) Ingress 통한 ALB 생성(이것 또한 외부 접속 시)



