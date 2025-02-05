# Kubernetes-Cluster

Crear una imagen en Docker

```
docker build -t node-image .
```

```
docker push <username>/node-image
```

Necesitaras tener instalado

kubectl

minikube


Despues de haber instalado.
Necesitarás esta estructura para configurar el archivo de kubernete



**Deployment**

![1719807800694](images/README/1719807800694.png)

apiVersion: apps/v1
kind: Deployment
metadata:
name: nodeapp-deployment
labels:
app: nodeapp
spec:
replicas: 1
selector:
matchLabels:
app: nodeapp
template:
metadata:
labels:
app: nodeapp
spec:
containers:

- name: nodeserver
  image: rupertsvargas/nodeapp:latest
  ports:
- containerPort: 3000


* **apiVersion:** Especifica la versión de la API de Kubernetes que se está utilizando. En este caso, `apps/v1` indica la versión v1 del grupo de API `apps`, que se utiliza para los recursos como Deployment.
* **kind:** Indica el tipo de recurso que se está creando, que en este caso es `Deployment`.
* **metadata:** Contiene metadatos sobre el objeto, como el nombre (`nodeapp-deployment`) y las etiquetas (`app: nodeapp`) asociadas al Deployment.
* **spec:** Especifica las características deseadas del Deployment.
  * **replicas:** Indica cuántas réplicas del pod deben ejecutarse. En este caso, solo se especifica una réplica (`replicas: 1`).
  * **selector:** Define cómo el Deployment encuentra los pods que debe gestionar.
    * **matchLabels:** Especifica que los pods deben tener las etiquetas definidas en `selector` para ser controlados por este Deployment (`app: nodeapp`).
  * **template:** Define el pod template que se utilizará para crear nuevos pods bajo este Deployment.
    * **metadata:** Metadatos para los pods creados.
      * **labels:** Etiquetas para los pods creados (`app: nodeapp` en este caso).
    * **spec:** Especificaciones para los pods creados.
      * **containers:** Lista de contenedores que se ejecutarán en los pods.
        * **name:** Nombre del contenedor (`nodeserver` en este caso).
        * **image:** Imagen del contenedor que se utilizará para crear los pods (`rupertsvargas/nodeapp:latest`).
        * **ports:** Define los puertos que el contenedor expone.
          * **containerPort:** Puerto del contenedor que será expuesto (`3000` en este caso).

![1719807824407](images/README/1719807824407.png)




* **apiVersion:** Especifica la versión de la API de Kubernetes que se está utilizando para el Service (`v1` en este caso).
* **kind:** Indica el tipo de recurso que se está creando, que es `Service`.
* **metadata:** Contiene metadatos sobre el objeto, como el nombre (`nodeapp-service`) asociado al Service.
* **spec:** Especifica las características deseadas del Service.
  * **selector:** Especifica cómo el Service encuentra los pods a los que debe dirigir el tráfico.
    * **app: nodeapp:** Indica que el Service dirige el tráfico a los pods que tienen la etiqueta `app: nodeapp`.
  * **type:** Define el tipo de Service. En este caso, `LoadBalancer` indica que el Service debe usar un balanceador de carga externo (si el clúster de Kubernetes lo soporta) para exponer el Service fuera del clúster.
  * **ports:** Lista los puertos que el Service expone.
    * **protocol:** Protocolo del puerto (`TCP` en este caso).
    * **port:** Puerto expuesto por el Service (`5000`).
    * **targetPort:** Puerto en los pods a los que el tráfico debe ser dirigido (`3000` en este caso).
    * **nodePort:** Puerto en los nodos físicos del clúster de Kubernetes por el cual el Service será accesible externamente (`31110`).


### Explicación General

* **Deployment:** Gestiona la creación y actualización de instancias de aplicaciones en forma de pods en un clúster de Kubernetes.
* **Service:** Define un conjunto de pods y una política de acceso a esos pods, proporcionando un balanceo de carga a través de los pods y permitiendo la exposición de la aplicación fuera del clúster.

Juntos, estos recursos permiten desplegar y exponer una aplicación en un clúster de Kubernetes de manera controlada y escalable.
