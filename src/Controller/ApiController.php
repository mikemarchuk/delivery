<?php

namespace App\Controller;

use App\Entity\Coupon;
use App\Entity\Order;
use App\Entity\Shop;
use App\Entity\ShopProduct;
use App\Repository\CouponRepository;
use App\Repository\OrderRepository;
use App\Repository\ShopProductRepository;
use App\Repository\ShopRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ApiController extends AbstractController
{
    #[Route('/api/coupon/{code}', name: 'api_coupon_code', methods: 'GET')]
    public function getCouponByCode(EntityManagerInterface $entityManager, string $code): JsonResponse
    {
        /** @var CouponRepository $couponRepository */
        $couponRepository = $entityManager->getRepository(Coupon::class);
        $coupon = $couponRepository->findOneBy(['code' => $code]);

        if ($coupon) {
            $data = [
                'id' => $coupon->getId(),
                'title' => $coupon->getTitle(),
                'code' => $coupon->getCode(),
                'discount' => $coupon->getDiscount()
            ];
        } else {
            $data = null;
        }

        return $this->json([
            'code' => 200,
            'result' => $data
        ]);
    }

    #[Route('/api/coupon', name: 'api_coupon', methods: 'GET')]
    public function getCouponList(EntityManagerInterface $entityManager): JsonResponse
    {
        /** @var CouponRepository $couponRepository */
        $couponRepository = $entityManager->getRepository(Coupon::class);
        return $this->json([
            'code' => 200,
            'result' => $couponRepository->getCouponList()
        ]);
    }

    #[Route('/api/shop', name: 'api_shop', methods: 'GET')]
    public function getShopList(EntityManagerInterface $entityManager): JsonResponse
    {
        /** @var ShopRepository $shopRepository */
        $shopRepository = $entityManager->getRepository(Shop::class);
        return $this->json([
            'code' => 200,
            'result' => $shopRepository->getShopList()
        ]);
    }

    #[Route('/api/shop/{id}', name: 'api_shop_product', methods: 'GET')]
    public function getShopProductList(EntityManagerInterface $entityManager, string $id): JsonResponse
    {
        /** @var ShopProductRepository $shopProductRepository */
        $shopProductRepository = $entityManager->getRepository(ShopProduct::class);
        return $this->json([
            'code' => 200,
            'result' => $shopProductRepository->getShopProductListByShop($id)
        ]);
    }

    #[Route('/api/history/{email}', name: 'api_shop_history', methods: 'GET')]
    public function getHistory(EntityManagerInterface $entityManager, string $email): JsonResponse
    {
        /** @var OrderRepository $orderRepository */
        $orderRepository = $entityManager->getRepository(Order::class);
        return $this->json([
            'code' => 200,
            'result' => $orderRepository->getHistoryByEmail($email)
        ]);
    }

    #[Route('/api/order', name: 'api_order', methods: 'POST')]
    public function saveOrder(Request $request, EntityManagerInterface $entityManager): JsonResponse
    {
        try {
            $parameters = json_decode($request->getContent(), true);
            $user = $parameters['user'];
            $shopId = $parameters['shop'];
            $products = $parameters['products'];

            $order = new Order();
            $order->setShop($entityManager->getRepository(Shop::class)->find($shopId))
                ->setClientName($user['name'])
                ->setClientEmail($user['email'])
                ->setClientPhone($user['phone'])
                ->setClientAddress($user['address'])
                ->setProductsData($products)
                ->setDate(new \DateTime());

            if ($parameters['coupon'])
                $order->setCouponData($parameters['coupon']);

            $entityManager->persist($order);
            $entityManager->flush();
        } catch (\Exception $e) {
            return $this->json([
                'code' => 500,
                'message' => 'Error occurred.'
            ]);
        }

        return $this->json([
            'code' => 200,
            'message' => 'The order has been successfully created.'
        ]);
    }
}
